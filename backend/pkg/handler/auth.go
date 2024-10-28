package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zhashkevych/todo-app"
)

func (h *Handler) signUp(c *gin.Context) {
	var input todo.User

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, "invalid input body")
		return
	}

	id, err := h.services.Authorization.CreateUser(input)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

type signInInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func (h *Handler) signIn(c *gin.Context) {

	id, exists := c.Get(userCtx)
	if exists {
		user, err := h.services.GetUserByID(id.(int))
		if err != nil {
			newErrorResponse(c, http.StatusBadRequest, "Invalid during get User by UserId")
			return
		}
		c.JSON(http.StatusOK, map[string]interface{}{
			"username": user.Username,
			"email":    user.Email,
		})
	} else {
		var input signInInput

		if err := c.BindJSON(&input); err != nil {
			newErrorResponse(c, http.StatusBadRequest, err.Error())
			return
		}

		token, err := h.services.Authorization.GenerateToken(input.Username, input.Password)
		if err != nil {
			newErrorResponse(c, http.StatusInternalServerError, err.Error())
			return
		}

		c.JSON(http.StatusOK, map[string]interface{}{
			"token": token,
		})
	}
}

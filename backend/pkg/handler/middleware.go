package handler

import (
	"errors"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

const (
	authorizationHeader = "Authorization"
	userCtx             = "userId"
)

func (h *Handler) userIdentity(c *gin.Context) {
	header := c.GetHeader(authorizationHeader)

	if header != "" {
		headerParts := strings.Split(header, " ")
		if len(headerParts) == 2 || headerParts[0] == "Bearer" {
			if len(headerParts[1]) != 0 {
				userId, err := h.services.Authorization.ParseToken(headerParts[1])
				if err == nil {
					c.Set(userCtx, userId)
				} else {
					newErrorResponse(c, http.StatusUnauthorized, err.Error())
				}
			} else {
				newErrorResponse(c, http.StatusUnauthorized, "token is empty")
			}
		} else {
			newErrorResponse(c, http.StatusUnauthorized, "invalid auth header")
		}
	}
}

func getUserById(c *gin.Context) (int, error) {
	id, ok := c.Get(userCtx)
	if !ok {
		return 0, errors.New("user id not found")
	}

	idInt, ok := id.(int)
	if !ok {
		return 0, errors.New("user id is of invalid type")
	}

	return idInt, nil
}

package internal

import (
	"api/internal/auth"
	"api/internal/users"

	"github.com/labstack/echo/v4"
)

func Routing(e *echo.Echo) {
	users.RoutesUser(e)
	auth.RoutesAuth(e)
}

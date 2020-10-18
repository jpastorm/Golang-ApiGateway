package users

import "github.com/labstack/echo/v4"

func RoutesUser(e *echo.Echo) {
	r := e.Group("/users")
	r.GET("", Login)
}

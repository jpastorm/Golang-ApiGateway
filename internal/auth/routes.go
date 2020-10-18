package auth

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func RoutesAuth(e *echo.Echo) {
	r := e.Group("/auth")
	r.POST("/login", login)
	r.POST("/register", register)
	// Unauthenticated route
	r.GET("", accessible)
	e.GET("/restricted", restricted, middleware.JWT([]byte("secret")))
}

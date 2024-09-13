package main

import (
	"os"
	"sell-point/utils"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

// go mod tidy - reseteamos el go.mod
func main() {
	utils.DotEnvInit()
	PORT := os.Getenv("PORT")
	app := fiber.New()

	// Cors
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
		AllowMethods: "GET, POST, PUT, DELETE",
	}))

	// Routes

	app.Listen(PORT)
}

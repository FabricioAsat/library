package routers

import "github.com/gofiber/fiber/v2"

func ItemsRoute(app *fiber.App) {

	items := app.Group("/items")

	items.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	items.Get("/:id", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	items.Post("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	items.Put("/:id", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	items.Delete("/:id", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
}

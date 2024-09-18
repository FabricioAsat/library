package routers

import (
	controllers "sell-point/controllers/items"

	"github.com/gofiber/fiber/v2"
)

func ItemsRoute(app *fiber.App) {

	items := app.Group("/items")

	items.Get("/", controllers.GetAllItems)
	items.Get("/:id", controllers.GetItem)
	items.Post("/", controllers.PostItem)

	items.Put("/:id", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	items.Delete("/:id", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
}

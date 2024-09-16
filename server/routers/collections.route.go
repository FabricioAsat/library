package routers

import (
	"github.com/gofiber/fiber/v2"

	collect "sell-point/controllers/collect"
)

// Estas collections van a almacenar todo tipo de models (games, movies, music, etc)
func CollectionsRoute(app *fiber.App) {
	collections := app.Group("/collections")

	// routing - /collections/...
	collections.Get("/", collect.GetCollections)
	collections.Get("/:id", func(c *fiber.Ctx) error { return nil })
	collections.Post("/", collect.PostCollection)
	collections.Put("/:id", func(c *fiber.Ctx) error { return nil })
	collections.Delete("/:id", func(c *fiber.Ctx) error { return nil })
}

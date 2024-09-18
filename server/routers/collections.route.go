package routers

import (
	"github.com/gofiber/fiber/v2"

	collect "sell-point/controllers/collect"
)

func CollectionsRoute(app *fiber.App) {
	collections := app.Group("/collections")

	// routing - /collections/...
	collections.Get("/", collect.GetCollections)
	collections.Get("/:id", collect.GetCollection)
	collections.Post("/", collect.PostCollection)
	collections.Put("/:id", collect.PutCollection)
	collections.Delete("/:id", collect.DeleteCollection)
}

package routers

import (
	controllers "sell-point/controllers/items"

	"github.com/gofiber/fiber/v2"
)

func ItemsRoute(app *fiber.App) {

	items := app.Group("/items")

	// routing - /items/...
	items.Get("/", controllers.GetAllItems)
	items.Get("/:id", controllers.GetItem)
	items.Get("/collection/:id", controllers.GetCollectionItems)
	items.Post("/", controllers.PostItem)
	items.Put("/:id", controllers.PutItem)
	items.Delete("/:id", controllers.DeleteItem)
}

package items

import (
	"context"
	"sell-point/database"
	mongocollect "sell-point/mongoCollect"
	"sell-point/services"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetCollectionItems(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	id := c.Params("id")
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	collection := mongocollect.GetCollection(db, "collections")
	if err := collection.FindOne(ctx, bson.M{"_id": objID}); err.Err() != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Err().Error(),
		})
	}
	// At this point, I know that the collection exists - now, find items with collectionId

	books, err := services.GetBooksByCollectionID(c, ctx, db, objID)
	if err != nil {
		return err
	}
	movies, err := services.GetMoviesByCollectionID(c, ctx, db, objID)
	if err != nil {
		return err
	}
	musics, err := services.GetMusicsByCollectionID(c, ctx, db, objID)
	if err != nil {
		return err
	}
	boardGames, err := services.GetBoardGamesByCollectionID(c, ctx, db, objID)
	if err != nil {
		return err
	}
	videogames, err := services.GetVideogamesByCollectionID(c, ctx, db, objID)
	if err != nil {
		return err
	}

	return c.JSON(fiber.Map{
		"message": "Collection items fetched successfully",
		"data": fiber.Map{
			"books":      books,
			"movies":     movies,
			"musics":     musics,
			"boardGames": boardGames,
			"videogames": videogames,
		},
	})
}

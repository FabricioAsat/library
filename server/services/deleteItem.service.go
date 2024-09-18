package services

import (
	"context"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func DeleteBookService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	booksCollection := mongocollect.GetCollection(db, "books")
	var book models.BaseModel
	if err := booksCollection.FindOneAndDelete(ctx, bson.M{"_id": objID}).Decode(&book); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book deleted successfully",
		"data":    book,
	})
}
func DeleteMovieService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	moviesCollection := mongocollect.GetCollection(db, "movies")
	var movie models.BaseModel
	if err := moviesCollection.FindOneAndDelete(ctx, bson.M{"_id": objID}).Decode(&movie); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book deleted successfully",
		"data":    movie,
	})
}
func DeleteMusicService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	musicsCollection := mongocollect.GetCollection(db, "musics")
	var music models.BaseModel
	if err := musicsCollection.FindOneAndDelete(ctx, bson.M{"_id": objID}).Decode(&music); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book deleted successfully",
		"data":    music,
	})
}
func DeleteVideogameService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	videogamesCollection := mongocollect.GetCollection(db, "videogames")
	var videogame models.BaseModel
	if err := videogamesCollection.FindOneAndDelete(ctx, bson.M{"_id": objID}).Decode(&videogame); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book deleted successfully",
		"data":    videogame,
	})
}
func DeleteBoardGameService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	boardgamesCollection := mongocollect.GetCollection(db, "boardgames")
	var boardgame models.BaseModel
	if err := boardgamesCollection.FindOneAndDelete(ctx, bson.M{"_id": objID}).Decode(&boardgame); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book deleted successfully",
		"data":    boardgame,
	})
}

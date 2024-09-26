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

func GetBookService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	booksCollection := mongocollect.GetCollection(db, "books")
	var book models.BookModel

	if err := booksCollection.FindOne(ctx, bson.M{"_id": objID}).Decode(&book); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book found",
		"data":    book,
	})
}

func GetVideogameService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	videogamesCollection := mongocollect.GetCollection(db, "videogames")
	var videogame models.VideogameModel

	if err := videogamesCollection.FindOne(ctx, bson.M{"_id": objID}).Decode(&videogame); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Videogame found",
		"data":    videogame,
	})
}

func GetMusicService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	musicsCollection := mongocollect.GetCollection(db, "musics")
	var music models.MusicModel

	if err := musicsCollection.FindOne(ctx, bson.M{"_id": objID}).Decode(&music); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Music found",
		"data":    music,
	})
}

func GetMovieService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	moviesCollection := mongocollect.GetCollection(db, "movies")
	var movie models.MovieModel

	if err := moviesCollection.FindOne(ctx, bson.M{"_id": objID}).Decode(&movie); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Movie found",
		"data":    movie,
	})
}

func GetBoardGameService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID) error {
	boardgamesCollection := mongocollect.GetCollection(db, "boardgames")
	var boardgame models.BoardGameModel

	if err := boardgamesCollection.FindOne(ctx, bson.M{"_id": objID}).Decode(&boardgame); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Boardgame found",
		"data":    boardgame,
	})
}

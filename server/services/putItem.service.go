package services

import (
	"context"
	"encoding/json"
	"fmt"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func PutBookService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID, data json.RawMessage) error {
	booksCollection := mongocollect.GetCollection(db, "books")
	var book models.BookModel

	if err := json.Unmarshal(data, &book); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	fmt.Println(objID)

	if err := booksCollection.FindOneAndUpdate(ctx, bson.M{"_id": objID}, bson.M{"$set": book}); err.Err() != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Err().Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book updated successfully",
		"data":    book,
	})
}

func PutMovieService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID, data json.RawMessage) error {
	moviesCollection := mongocollect.GetCollection(db, "movies")
	var movie models.MovieModel
	if err := json.Unmarshal(data, &movie); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	if err := moviesCollection.FindOneAndUpdate(ctx, bson.M{"_id": objID}, bson.M{"$set": movie}); err.Err() != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Err().Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book updated successfully",
		"data":    movie,
	})
}

func PutMusicService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID, data json.RawMessage) error {
	musicCollection := mongocollect.GetCollection(db, "music")
	var music models.MusicModel
	if err := json.Unmarshal(data, &music); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	if err := musicCollection.FindOneAndUpdate(ctx, bson.M{"_id": objID}, bson.M{"$set": music}); err.Err() != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Err().Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book updated successfully",
		"data":    music,
	})
}

func PutVideogameService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID, data json.RawMessage) error {
	videogamesCollection := mongocollect.GetCollection(db, "videogames")
	var videogame models.VideogameModel
	if err := json.Unmarshal(data, &videogame); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	if err := videogamesCollection.FindOneAndUpdate(ctx, bson.M{"_id": objID}, bson.M{"$set": videogame}); err.Err() != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Err().Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book updated successfully",
		"data":    videogame,
	})
}

func PutBoardGameService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, objID primitive.ObjectID, data json.RawMessage) error {
	boardgamesCollection := mongocollect.GetCollection(db, "boardgames")
	var boardgame models.BoardGameModel
	if err := json.Unmarshal(data, &boardgame); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	if err := boardgamesCollection.FindOneAndUpdate(ctx, bson.M{"_id": objID}, bson.M{"$set": boardgame}); err.Err() != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Err().Error(),
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Book updated successfully",
		"data":    boardgame,
	})
}

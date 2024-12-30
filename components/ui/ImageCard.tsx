import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLikeContext } from "@/contexts/LikeContext";

const ImageCard = ({ book }: any) => {
  const [Liked, setLiked] = useState(false);

  const heartIcon = Liked
    ? require("../../assets/icons/heartrose.png")
    : require("../../assets/icons/heart.png");

  const staticHeartIcon = require("../../assets/icons/heartrose.png");
  const { incrementLike, decrementLike } = useLikeContext();

  const toggleLike = () => {
    if (Liked) {
      decrementLike();
    } else {
      incrementLike();
    }
    setLiked(!Liked);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <View style={styles.heartIcons}>
          <TouchableOpacity onPress={toggleLike}>
            <Image style={{ height: 30, width: 30 }} source={heartIcon} />
          </TouchableOpacity>
        </View>

        <Image source={book.cover_image} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>by {book.author}</Text>
        <Text style={styles.year}>Published: {book.publication_year}</Text>
        <Text style={styles.genres}>Genres: {book.genre.join(", ")}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {book.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  imageContainer: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    position: "relative",
  },
  heartIcons: {
    position: "absolute",
    top: 11,
    right: 11,
    zIndex: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c4c4",
    borderRadius: 50,
    padding: 5,
  },
  image: {
    width: 100,
    height: 200,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  author: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  year: {
    fontSize: 12,
    color: "#888",
  },
  genres: {
    fontSize: 12,
    color: "#555",
    marginTop: 6,
  },
  description: {
    fontSize: 12,
    color: "#444",
    marginTop: 6,
  },
});

export default ImageCard;

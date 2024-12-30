import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import ImageCard from "@/components/ui/ImageCard";
import { useLikeContext } from "@/contexts/LikeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { likeCount } = useLikeContext();

  type RouteParams = {
    username?: string;
  };

  type Book = {
    id: number;
    title: string;
    author: string;
    publication_year: number;
    genre: string[];
    description: string;
    cover_image?: string;
  };

  const route = useRoute();
  const { username } = route.params as RouteParams;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/books");
        const data = await response.json();
  
        // Array of image paths
        const customImagePaths = [
          require("../../assets/images/books/1.png"),
          require("../../assets/images/books/2.png"),
          require("../../assets/images/books/3.png"),
          require("../../assets/images/books/4.png"),
          require("../../assets/images/books/5.png"),
          require("../../assets/images/books/6.png"),
          require("../../assets/images/books/7.png"),
          require("../../assets/images/books/8.png"),
        ];
  
        // Assign random images to books
        const updatedBooks: Book[] = data.map((book: any) => ({
          ...book,
          cover_image:
            customImagePaths[
              Math.floor(Math.random() * customImagePaths.length)
            ], // Randomly pick an image
        }));
  
        setBooks(updatedBooks);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBooks();
  }, []);
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://freetestapi.com/api/v1/books?search=${searchTerm}`
        );
        const data = await response.json();
  
        // Array of image paths
        const customImagePaths = [
          require("../../assets/images/books/1.png"),
          require("../../assets/images/books/2.png"),
          require("../../assets/images/books/3.png"),
          require("../../assets/images/books/4.png"),
          require("../../assets/images/books/5.png"),
          require("../../assets/images/books/6.png"),
          require("../../assets/images/books/7.png"),
          require("../../assets/images/books/8.png"),
        ];
  
        // Assign random images to books
        const updatedBooks: Book[] = data.map((book: any) => ({
          ...book,
          cover_image:
            customImagePaths[
              Math.floor(Math.random() * customImagePaths.length)
            ], // Randomly pick an image
        }));
  
        setBooks(updatedBooks);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBooks();
  }, [searchTerm]);
  

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Dear {username || "Guest"}</Text>
            <Text style={styles.welcomeText}>Welcome to BookHaven</Text>
          </View>
        </View>

        {/* Search Section */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for Books..."
            placeholderTextColor="#ff9a00"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TouchableOpacity style={styles.floatingButton}>
            <Image
              style={styles.heartIcon}
              source={require("../../assets/icons/heart.png")}
            />
            <Text style={styles.floatingButtonText}>{likeCount}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ImageCard book={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    padding: 10,
  },
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    height: 50,
    width: 50,
    marginRight: 16,
  },
  greetingContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    paddingHorizontal: 12,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: "#333",
  },
  floatingButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#DE3163",
    borderRadius: 20,
    marginLeft: 8,
  },
  heartIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Home;

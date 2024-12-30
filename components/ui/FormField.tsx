import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";



const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}:any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconWrapper}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16, // Adjust space between fields as needed
  },
  title: {
    fontSize: 16,
    color: "#7B7B8B", // Replace with your gray color
    fontFamily: "pmedium", // Ensure you have this font set up
    marginBottom: 8,
  },
  inputContainer: {
    width: "100%",
    height: 64, // Equivalent to h-16
    paddingHorizontal: 16, // Equivalent to px-4
    backgroundColor: "#1A1A1D", // Replace with your black-100 color
    borderRadius: 16, // Equivalent to rounded-2xl
    borderWidth: 2,
    borderColor: "#2C2C34", // Replace with your black-200 color
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    color: "#FFFFFF", // White text color
    fontSize: 16, // Equivalent to text-base
    fontFamily: "psemibold", // Ensure you have this font set up
  },
  iconWrapper: {
    padding: 4, // Optional, for better touch area around the icon
  },
  icon: {
    width: 24, // Equivalent to w-6
    height: 24, // Equivalent to h-6
  },
});

export default FormField;

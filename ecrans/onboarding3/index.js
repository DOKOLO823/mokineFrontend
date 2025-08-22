// App.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export function Onboarding3() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ImageBackground
        source={require("../../assets/images/veterinaire.jpg")} // Mets ton image ici
        style={styles.background}
        resizeMode="cover"
        
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>Bienvenu sur Mokine</Text>

          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnTextPrimary}>S’inscrire</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSecondary}>
            <Text style={styles.btnTextSecondary}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000000b9", // légère ombre pour lire le texte
  },
  content: {
    padding: 20,
    alignItems: "center",
    marginBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  btnPrimary: {
    backgroundColor: "#0a7b46", // vert comme ton image
    paddingVertical: 14,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  btnTextPrimary: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  btnSecondary: {
    borderColor: "#fff",
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
  },
  btnTextSecondary: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

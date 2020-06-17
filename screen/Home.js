import React from "react";

import { StatusBar, Dimensions } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import styled from "styled-components/native";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
import { filterByCountry, getLocation } from "../services/movieFilter";
import { useState, useEffect } from "react";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get("window").height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [nationalMovies, setNationalMovies] = useState([]);

  useEffect(() => {
    const loadingMovies = async () => {
      const moviesJson = require("../assets/Movies.json");
      const position = await getLocation();
      const nationalMovies = await filterByCountry(moviesJson, position);
      setNationalMovies(nationalMovies);

      const nationalMoviesTitles = nationalMovies.map(
        (item, index) => item.Title
      );

      moviesWithoutNationals = moviesJson.filter((item, index) => {
        return !nationalMoviesTitles.includes(item.Title);
      });

      setMovies(moviesWithoutNationals);
    };
    loadingMovies();
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require("../assets/poster.jpg")}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              "rgba(0,0,0,0.5)",
              "rgba(0,0,0,0.0)",
              "rgba(0,0,0,0.0)",
              "rgba(0,0,0,1)",
            ]}
          >
            <Header />
            <Hero />
          </Gradient>
        </Poster>
        <Movies label="Recomendados" item={movies} />
        <Movies label="Nacionais" item={nationalMovies} />
        <Movies label="Continuar assistindo como XXXX" item={[]} />
      </Container>
    </>
  );
};

export default Home;

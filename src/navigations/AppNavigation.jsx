import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import RecipeListScreen from "../screens/RecipeList/RecipeListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from "../screens/Search/SearchScreen";
import IngredientsDetailScreen from "../screens/IngredientsDetails/IngredientsDetailScreen";

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator
            screenOption={{
                HeaderTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Categories' component={CategoriesScreen}/>
            <Stack.Screen name='Recipe' component={RecipeScreen}/>
            <Stack.Screen name='RecipesList' component={RecipeListScreen} />
            <Stack.Screen name='Ingredient' component={IngredientScreen} />
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen name='IngredientsDetails' component={IngredientsDetailScreen} />
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
    return(
        <Drawer.Navigator
            screenOption={{
                headerShown: false,
                drawerStyle: {
                    width: 250,
                },
            }}
            drawerContent={({navigation}) => <DrawerContainer navigation={navigation}/>}
        >
            <Drawer.Screen name='Main' component={MainNavigator} />
        </Drawer.Navigator>
    );
}

export default function AppContainer() {
    return (
        <NavigationContainer>
            <DrawerStack />
        </NavigationContainer>
    );
}

console.disableYellowBox = true;
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent}
];

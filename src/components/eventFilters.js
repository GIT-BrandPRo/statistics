
import React from "react";
import Graphs from "./Graphs";
import {Route, Switch} from "react-router";
import {Today,Yesterday,Week,Month,Year,Quarter} from "./dateFilters";

   export function All() {
        return (
          <div>
                <h1>All</h1>
              <Graphs/>
            </div>
        );
    }

export function Events() {
        return (
            <div>
                <h1>Events</h1>
                <ul>
                    <li>event 1</li>
                    <li>event 2</li>
                    <li>event 3</li>
                    <li>event 4</li>
                    <li>event 5</li>
                </ul>
            </div>
        );
    }

export  function AllEvents() {
        return (
            <div>
                <h1>AllEvents</h1>
                <ul>
                    <li>event 1</li>
                    <li>event 2</li>
                    <li>event 3</li>
                    <li>event 4</li>
                    <li>event 5</li>
                </ul>
                <ul>
                    <li>event 1</li>
                    <li>event 2</li>
                    <li>event 3</li>
                    <li>event 4</li>
                    <li>event 5</li>
                </ul>
                <ul>
                    <li>event 1</li>
                    <li>event 2</li>
                    <li>event 3</li>
                    <li>event 4</li>
                    <li>event 5</li>
                </ul>
            </div>
        );
    }



import { createFileRoute } from "@tanstack/react-router";
import { GroceryApp } from "@/components/grocery-app";

export const Route = createFileRoute("/")({ component: GroceryApp });

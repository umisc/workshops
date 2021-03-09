#include <stdio.h>
#include <stdlib.h>
#include "flag.h"

#define FLAG_PRICE 1000000
#define PIZZA_PRICE 5

void get_int(int* a) {
    if(!scanf("%d", a)) {
        printf("Invalid input");
        exit(1);
    }
}

int balance = 420;

int main(void) {
    printf("Welcome to Annie's Pizza Parlour.\n");
    printf("What would you like to purchase today?\n");

    int inp = 0;
    while(inp != 3) {
        printf("\n");
        printf("You have $%d in your account.\n", balance);
        printf("Menu:\n");
        printf("\t 1: Flag  [$%d]\n", FLAG_PRICE);
        printf("\t 2: Pizza [$%d]\n", PIZZA_PRICE);
        printf("\t 3: Exit  [-]\n", PIZZA_PRICE);

        printf("Enter your selection: ");
        fflush(stdout);
        get_int(&inp);
        
        if(inp == 1) {
            if(balance < FLAG_PRICE) {
                printf("Not enough money!\n");
            } else {
                printf("Here you go: %s\n", flag);
                exit(0);
            }
        } else if(inp == 2) {
            printf("Enter quantity: ");
            fflush(stdout);
            int qty, amt;
            get_int(&qty);
            amt = qty * PIZZA_PRICE;
            if(balance < amt) {
                printf("Not enough money!\n");
            } else {
                balance -= amt;
                printf("Your account has been charged $%d. I hope you enjoy your %d pizzas.\n", amt, qty);
            }
        } else if(inp != 3) {
            printf("Invalid selection");
            exit(1);
        }
    }

    printf("Have a nice day.\n");

    return 0;
}

using System;

namespace Problem_4._Hotel
{
    class Program
    {
        static void Main(string[] args)
        {
            //A hotel has three types of rooms: studio, double and master suite. The prices are different for the different months: 
            //May and October June and September  July, August and December
            //Studio - 50 leva per night Studio -60 leva per night Studio -68 leva per night
            //Double - 65 leva per night Double -72 leva per night Double -77 leva per night
            //Suite - 75 leva per night Suite -82 leva per night Suite -89 leva per night
            //They have also the following discounts:
            //•	For studio and more than 7 nights in May and October: 5 % discount
            //•	For double and more than 14 nights in June and September: 10 % discount
            //•	For suite and more than 14 nights in July, August and December: 15 % discount
            //•	For studio and more than 7 nights in September and October: one night is free

            string month = Console.ReadLine();
            int nights = int.Parse(Console.ReadLine());

            double priceOfStudio = 0;
            double priceOfDouble = 0;
            double priceOfSuite = 0;
            double discountStudio = 0;
            double discountDouble = 0;
            double discountSuite = 0;

            if (month== "May" || month== "October")
            {
                //months are May and October
                priceOfStudio = 50;
                priceOfDouble = 65;
                priceOfSuite = 75;
                
            }
            else if (month== "June" || month== "September")
            {
                //months are June and September
                priceOfStudio = 60;
                priceOfDouble = 72;
                priceOfSuite = 82;
            }else if (month== "July" || month== "August" || month== "December")
            {
                //months are July, August and December
                priceOfStudio = 68;
                priceOfDouble = 77;
                priceOfSuite = 89;
            }
            if (nights>=7&&nights<=14)
            {
                //nights>=7&&<14
                if (month== "May"||month== "October")
                {
                    discountStudio = 0.05;
                }
                
            }else if (nights>14)
            {
                //nights>=14
                if(month== "June"||month== "September")
                {
                    discountDouble = 0.1;
                }else if (month== "July"||month== "August"||month== "December")
                {
                    discountSuite = 0.15;
                }
            }

            double priceOfTheStayStudio = (priceOfStudio * nights) - ((priceOfStudio * nights) * discountStudio);
            double priceOfTheStayDouble = (priceOfDouble * nights) - ((priceOfDouble * nights) * discountDouble);
            double priceOfTheSuite = (priceOfSuite * nights) - ((priceOfSuite * nights) * discountSuite);

            
            if ((month == "September" || month == "October")&&nights>=7)
            {
                Console.WriteLine($"Studio: {((priceOfTheStayStudio)-(priceOfStudio-(priceOfStudio*discountStudio))):f2} lv.");
            }
            else
            {
                Console.WriteLine($"Studio: {priceOfTheStayStudio:f2} lv.");
            }
            Console.WriteLine($"Double: {priceOfTheStayDouble:f2} lv.");
            Console.WriteLine($"Suite: {priceOfTheSuite:f2} lv.");

        }
    }
}

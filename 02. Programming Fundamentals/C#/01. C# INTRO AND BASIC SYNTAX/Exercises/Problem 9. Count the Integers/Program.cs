using System;

namespace Problem_9._Count_the_Integers
{
    class Program
    {
        static void Main(string[] args)
        {
            // Write a program, which can receive any type of input, but upon receiving anything other than an integer – stops the 
            //execution of the program and prints how many numbers were read.
            //Input
            //You can receive any type of data as input from the console.
            //Output
            //Print only the total count of the numbers.
            //Constraints
            //•	You will receive no more than 100 lines.
            //•	Every number will not be longer than 7 digits.

            
            int counter = 0;

            for(int i=1; i<101; i++)
            {
                string input = Console.ReadLine();
                //cycle to count the integers
                int value;
                bool result = Int32.TryParse(input, out value);
                if (result)
                {
                    counter += 1;
                }
                else
                {
                    i = 102;
                }

            }
            Console.WriteLine(counter);
            


        }
    }
}

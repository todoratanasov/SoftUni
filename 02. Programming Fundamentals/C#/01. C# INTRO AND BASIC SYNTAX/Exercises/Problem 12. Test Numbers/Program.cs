using System;

namespace Problem_12._Test_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            //Write a program, which finds all the possible combinations between two numbers – N and M.
            //The first digit decreases from N to 1, and the second digit increases from 1 to M. The two digits form a number. 
            //Multiply the two digits, then multiply their product by 3.Add the result to the total sum. 
            //You will also be given a third number, which will be the maximum boundary of the sum. If the sum is equal or greater than this number you should stop the program. See the examples for further information. 
            //Input
            //The input is read from the console and consists of three lines: 
            //•	First line – N – integer in the interval[1…100]
            //•	Second line – M – integer in the interval[1…100]
            //•	Third line – maximum sum boundary – integer in the interval[1…1000000]
            //Output
            //The output depends on the result:
            //•	If the sum is equal or greater than the maximum sum:
            //o   "{count of combinations} combinations"
            //o   "Sum: {sum from the combinations} >= {maximum sum}"
            //•	If the sum is less than the maximum sum:
            //o   "{count of combinations} combinations"
            //o   "Sum: {sum from the combinations}"

            int firstNumber = int.Parse(Console.ReadLine());
            int secondNumber = int.Parse(Console.ReadLine());
            int thirdNumber = int.Parse(Console.ReadLine());

            int result = 0;
            int counter = 0;
            for (int i = firstNumber; i >= 1; i--)
            {
                for (int j = 1; j <= secondNumber; j++)
                {
                    int a = i;
                    int b = j;                                      
                                                  
                    int total=(a * b) * 3;

                    result = result + total;
                    counter++;

                    if (result>=thirdNumber)
                    {
                        Console.WriteLine($"{counter} combinations");
                        Console.WriteLine($"Sum: {result} >= {thirdNumber}");
                        return;
                    }
                }
            }
            Console.WriteLine($"{counter} combinations");
            Console.WriteLine($"Sum: {result}");
            

        }
    }
}

using System;

namespace Problem_11._5_Different_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            //You will be given two numbers – a and b. Generate five numbers - n1, n2, n3, n4, n5, for which the following 
            //conditions are true: a ≤ n1 < n2 < n3 < n4 < n5 ≤ b. If there is no number in the given interval, which satisfies 
            //the conditions – print “No”.
            //Input
            //The input contains two integers, each on a new line.
            //Output
            //Print all numbers in increasing order and on a new line.
            //Constraints
            //•	a and b will be integers in the interval[-100…100]

            int firstNumber = int.Parse(Console.ReadLine());
            int secondNumber = int.Parse(Console.ReadLine());

            if (secondNumber-firstNumber<5)
            {
                Console.WriteLine("No");
            }
            else
            {

            

            for (int d1 = firstNumber; d1 <= secondNumber; d1++)
            {
                for (int d2 = firstNumber; d2 <= secondNumber; d2++)
                {
                    for (int d3 = firstNumber; d3 <= secondNumber; d3++)
                    {
                        for (int d4 = firstNumber; d4 <= secondNumber; d4++)
                        {
                            for (int d5 = firstNumber; d5 <= secondNumber; d5++)
                            {
                                bool isValid = firstNumber <= d1 && d1 < d2 && d2 < d3 && d3 < d4 && d4 < d5 && d5 <= secondNumber;
                                if (isValid)
                                {
                                    Console.WriteLine($"{d1} {d2} {d3} {d4} {d5}");
                                }
                            }
                        }
                    }
                }
            }
            }
        }
    }
}

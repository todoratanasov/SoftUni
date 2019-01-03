using System;

namespace Problem_10._Triangle_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            //Write a program, which receives a number – n, and prints a triangle from 1 to n as in the examples.
            //Constraints
            //•	n will be in the interval[1...20].

            int number = int.Parse(Console.ReadLine());

            for (int i = 1; i <= number; i++)
            {
                //cycle that draws the lines
                int j = i;
                string answer="";
                for (int k = 1; k <= i; k++)
                {
                    answer = answer+j.ToString()+" ";
                }
                
                
                Console.WriteLine(answer);
                
                
            }

        }
    }
}

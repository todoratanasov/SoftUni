using System;

namespace _6._Prime_Checker
{
    class Program
    {
        //Write a Boolean method IsPrime(n) that check whether a given integer number n is prime.Examples:
        static void Main(string[] args)
        {
            bool answer = IsPrime(long.Parse(Console.ReadLine()));
            Console.WriteLine(answer);
        }
        static bool IsPrime(long number)
        {
            bool result = false;
            if (number==2)
            {
                result = true;
                return result;
            }
            for (long i = 2; i < number; i++)
            {
                
                if (number%i==0&&number!=2)
                {
                    result = false;
                    i = number;
                }
                else
                {

                    result = true;
                }
                
            }
            return result;            

        }
    }
}

using System;
using System.Linq;

namespace _4._Sieve_of_Eratosthenes
{
    class Program
    {
        //Write a program to find all prime numbers in range [1…n]. Implement the algorithm called “Sieve of Eratosthenes”:
        //https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes. Steps in the “Sieve of Eratosthenes” algorithm:
        //1.	Assign primes[0…n] = true
        //2.	Assign primes[0] = primes[1] = false
        //3.	Find the smallest p, which holds primes[p] = true
        //•	Print p(it is prime)
        //•	Assign primes[2 * p] = primes[3 * p] = primes[4 * p] = … = false
        //4.	Repeat for the next smallest p<n.

        static void Main(string[] args)
        {

            int number = int.Parse(Console.ReadLine());
            int[] array = new int[number-1];
            int counter = 0;
            int[] answerArray = new int[number];

            for (int i = 2; i <= number; i++)
            {
                array[i-2] = i;
            }
            //Console.Write(string.Join(" ", array));
            
            for (int i = 0; i < array.Length; i++)
            {
                int num = array[i]; //2
                bool isPrime = true;
                for (int l = 0; l < num-2; l++)
                {
                    
                    if (num%array[l]==0&&num!=2&&num!=3)
                    {
                        isPrime = false;
                        break;
                    }
                    
                }
                if (isPrime)
                {
                    
                    answerArray[counter] = num;
                    counter++;
                }
                
            }

            for (int i = 0; i < counter; i++)
            {
                Console.Write(answerArray[i]+" ");
                
            }
            Console.Write();


        }
    }
}

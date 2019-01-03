using System;

namespace _13._Vowel_or_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            //Create a program to check if given symbol is digit, vowel or any other symbol.

            string symbol = Console.ReadLine();
            int answer;
            bool result = Int32.TryParse(symbol, out answer);
            //A E I O U
            if (symbol=="a"||symbol=="e"||symbol=="i"||symbol=="o"||symbol=="u")
            {
                Console.WriteLine("vowel");
            }
            else if (int.TryParse(symbol, out answer))
            {
                Console.WriteLine("digit");
            }
            else
            {
                Console.WriteLine("other");
            }
        }
    }
}

using System;

namespace _06._Strings_And_Objects
{
    class Program
    {
        static void Main(string[] args)
        {
            object firstWord = Console.ReadLine();
            object secondWord = Console.ReadLine();

            string answer;
            answer = (string)firstWord + " " + secondWord;

            Console.WriteLine(answer);

        }
    }
}

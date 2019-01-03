using System;

namespace _9._Index_of_Letters
{
    class Program
    {
        //Write a program that creates an array containing all letters from the alphabet (a-z). Read a lowercase word from the console and print 
        //the index of each of its letters in the letters array.
        static void Main(string[] args)
        {
            string value = Console.ReadLine();
            int length = value.Length;

            char[] alphabet = new char[26];

            for (int i = 0; i <= 25; i++)
            {
                char letter= (char)(i + 97);
                alphabet[i] += letter;
                //Console.WriteLine(alphabet[i]);
            }

            for (int i = 0; i < length; i++)
            {
                char letter = value[i];
                for (int j = 0; j < 26; j++)
                {
                    char letterToCheck = alphabet[j];
                    if (letter==letterToCheck)
                    {
                        Console.WriteLine($"{letter} -> {j}");
                        break;
                    }
                }
            }
            

        }
    }
}

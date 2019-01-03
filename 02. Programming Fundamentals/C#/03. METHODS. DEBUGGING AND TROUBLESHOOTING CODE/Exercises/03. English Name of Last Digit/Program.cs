using System;

namespace _03._English_Name_of_Last_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            string number = LastDigit(Console.ReadLine());
            
            Console.WriteLine(number);

        }
        static string LastDigit(string word)
        {
            string lastChar="";
            string output = word.Substring(word.Length - 1);
            if (output == "1")
            {
                lastChar = "one";
            }
            else if (output == "2")
            {
                lastChar = "two";
            } else if (output == "3")
            {
                lastChar = "three";
            } else if (output == "4")
            {
                lastChar = "four";
            } else if (output == "5")
            {
                lastChar = "five";
            }
            else if (output == "6")
            {
                lastChar = "six";
            }
            else if (output == "7")
            {
                lastChar = "seven";
            }
            else if (output == "8")
            {
                lastChar = "eight";
            }
            else if (output == "9")
            {
                lastChar = "nine";
            }
            else if (output=="0")
            {
                lastChar = "zero";
            }
            return lastChar;
        }
    }
}

using System;

namespace _4._Numbers_in_Reversed_Order
{
    class Program
    {
        //Write a method that prints the digits of a given decimal number in a reversed order.
        static void Main(string[] args)
        {
            string result = ReverseOrder(Console.ReadLine());
            Console.WriteLine(result);
        }
        static string ReverseOrder(string number)
        {
            string answer = string.Empty;
            for (int i = number.Length-1; i >= 0; i--)
            {
                //slice the string and add'em to answer
                answer +=number[i];
            }

            return answer;
        }
    }
}

using System;

namespace _4._Variable_in_Hexadecimal_Format
{
    class Program
    {
        static void Main(string[] args)
        {
           
            decimal decValue = Convert.ToInt32(Console.ReadLine(), 16);
            
            Console.WriteLine(decValue);
        }
    }
}

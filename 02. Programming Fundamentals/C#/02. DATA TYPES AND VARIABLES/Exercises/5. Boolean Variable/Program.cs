using System;

namespace _5._Boolean_Variable
{
    class Program
    {
        static void Main(string[] args)
        {
            bool input = Convert.ToBoolean(Console.ReadLine());
            if (input==true)
            {
                Console.WriteLine("Yes");
            }else
	        {
                Console.WriteLine("No");
            }
        }
    }
}

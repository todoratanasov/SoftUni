using System;

namespace _15._Fast_Prime_Checker___Refactor
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            for (int i = 2; i <= number; i++)
            {
                bool TowaLIE = true;
                for (int delio = 2; delio <= Math.Sqrt(i); delio++)
                {
                    if (i % delio == 0)
                    {
                        TowaLIE = false;
                        break;
                    }
                }
                Console.WriteLine($"{i} -> {TowaLIE}");
            }

        }
    }
}

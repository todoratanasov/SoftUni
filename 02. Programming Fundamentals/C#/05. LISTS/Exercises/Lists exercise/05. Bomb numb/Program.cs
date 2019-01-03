namespace _05._Bomb_numb
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    class Bomb_Numbers
    {
        static void Main()
        {
            List<int> numbers = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
            List<int> parameters = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToList();
            int spec = parameters[0];
            int pow = parameters[1];
            for (int i = 0; i < numbers.Count; i++)
            {
                if (numbers[i] == spec)
                    for (int p = -pow; p <= pow; p++)
                        if (i + p >= 0 && i + p < numbers.Count)
                            numbers[i + p] = 0;

            }

            Console.WriteLine(numbers.Sum());
        }
    }
}


namespace _03._Array_manip
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    class Array_Manipulator
    {
        static void Main()
        {
            List<int> input = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> positions = new List<int>();

            for (int i = 0; i < i + 1; i++)
            {



                List<string> commands = Console.ReadLine().Split(' ').ToList();
                if (commands[0] == "add")
                {
                    input = AddCmd(input, commands);
                }
                else if (commands[0] == "remove")
                {
                    input = RemoveIndex(input, commands);
                }
                else if (commands[0] == "addMany")
                {
                    input = cmd(input, commands);

                }
                else if (commands[0] == "shift")
                {

                    input = ShiftCmd(input, commands);

                }
                else if (commands[0] == "sumPairs")
                {
                    input = SumCmd(input, commands);

                }

                else if (commands[0] == "contains")
                {
                    int solution = 0;
                    solution = Contains(input, commands);
                    positions.Add(solution);

                }
                else if (commands[0] == "print")
                {
                    for (int num = 0; num < positions.Count; num++)
                    {
                        Console.WriteLine(positions[num]);
                    }
                    var result = String.Join(", ", input);
                    Console.WriteLine("[" + result + "]");
                    break;
                }

            }

        }
        public static List<int> SumCmd(List<int> input, List<string> cmd)
        {
            List<int> solution = new List<int>();
            for (int i = 1; i < input.Count; i += 2)
            {
                solution.Add(input[i - 1] + input[i]);
            }
            if (input.Count % 2 != 0)
            {
                solution.Add(input[input.Count - 1]);
            }
            return solution;

        }

        public static List<int> AddCmd(List<int> input, List<string> cmd)
        {
            List<int> newValue = new List<int>();

            newValue = input;
            newValue.Insert(int.Parse(cmd[1]), int.Parse(cmd[2]));
            return newValue;
        }
        public static List<int> ShiftCmd(List<int> input, List<string> cmd)
        {
            int positions = int.Parse(cmd[1]);
            List<int> newValue = new List<int>(input.Count);
            for (int shiftPos = 0; shiftPos < input.Count; shiftPos++)
            {
                newValue.Add(input[(positions + shiftPos) % input.Count]);
            }
            return newValue;
        }
        public static List<int> RemoveIndex(List<int> input, List<string> cmd)
        {
            List<int> newValue = new List<int>();

            newValue = input;
            newValue.RemoveAt(int.Parse(cmd[1]));
            return newValue;
        }
        public static int Contains(List<int> input, List<string> cmd)
        {
            int newValue = -1;

            for (int temp = 0; temp < input.Count; temp++)
            {
                if (int.Parse(cmd[1]) == input[temp])
                {
                    newValue = temp;
                    break;
                }
            }

            return newValue;
        }
        public static List<int> cmd(List<int> input, List<string> cmd)
        {
            List<int> newValue = new List<int>();
            List<int> valuesForInsert = new List<int>();
            for (int i = 2; i < cmd.Count; i++)
            {
                valuesForInsert.Add(int.Parse(cmd[i]));
            }
            newValue = input;
            newValue.InsertRange(int.Parse(cmd[1]), valuesForInsert);

            return newValue;
        }
    }
}
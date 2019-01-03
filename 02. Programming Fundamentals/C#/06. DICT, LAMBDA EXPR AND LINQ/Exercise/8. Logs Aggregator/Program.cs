using System;
using System.Collections.Generic;
using System.Linq;

namespace _8._Logs_Aggregator
{
    class Program
    {
        //You are given a sequence of access logs in format <IP> <user> <duration>. For example:
        //•	192.168.0.11 peter 33
        //•	10.10.17.33 alex 12
        //•	10.10.17.35 peter 30
        //•	10.10.17.34 peter 120
        //•	10.10.17.34 peter 120
        //•	212.50.118.81 alex 46
        //•	212.50.118.81 alex 4
        //Write a program to aggregate the logs data and print for each user the total duration of his sessions and a list of unique IP addresses 
        //in format "<user>: <duration> [<IP1>, <IP2>, …]". Order the users alphabetically.Order the IPs alphabetically.In our example, the output 
        //should be the following:
        //•	alex: 62 [10.10.17.33, 212.50.118.81]
        //•	peter: 303 [10.10.17.34, 10.10.17.35, 192.168.0.11]
        //Input
        //The input comes from the console.At the first line a number n stays which says how many log lines will follow. Each of the next n lines 
        //holds a log information in format<IP> <user> <duration>. The input data will always be valid and in the format described.There is no need 
        //to check it explicitly.

        static void Main(string[] args)
        {
            int lines = int.Parse(Console.ReadLine());

            SortedDictionary<string, SortedDictionary<string, int>> answer = new SortedDictionary<string, SortedDictionary<string, int>>();

            for (int i = 0; i < lines; i++)
            {
                List<string> value = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToList();

                string user = value[1];
                int duration = int.Parse(value[2]);
                string iP = value[0];

                if (answer.ContainsKey(user)==false)
                {
                    answer.Add(user, new SortedDictionary<string, int>());
                    answer[user].Add(iP, duration);
                }
                else
                {
                    if (answer[user].ContainsKey(iP)==false)
                    {
                        answer[user].Add(iP, duration);
                    }
                    else
                    {
                        answer[user][iP] += duration;
                    }
                }
            }
            foreach (var item in answer)
            {
                string userFinal = item.Key;
                int totalDuration = answer[userFinal].Values.Sum();
                List<string> listToPrint = new List<string>();
                Console.Write($"{userFinal}: {totalDuration} [");

                foreach (var token in item.Value)
                {
                    string iPFinal = token.Key;
                    listToPrint.Add(iPFinal);

                }
                //Console.Write($"]");
                Console.WriteLine($"{string.Join(", ", listToPrint)}]");
                listToPrint.Clear();
            }

        }
    }
}

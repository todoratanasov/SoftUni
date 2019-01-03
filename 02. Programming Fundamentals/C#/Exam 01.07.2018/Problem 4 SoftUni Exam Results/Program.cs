using System;
using System.Collections.Generic;
using System.Linq;

namespace Problem_4_SoftUni_Exam_Results
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> countOfLanguages = new Dictionary<string, int>();
            Dictionary<string, Dictionary<string, int>> answer = new Dictionary<string, Dictionary<string, int>>();
            while (true)
            {
                string[] value = Console.ReadLine().Split("-", StringSplitOptions.RemoveEmptyEntries);

                if (value[0]== "exam finished")
                {
                    break;
                }
                if ((value[1]== "banned")==false)
                {
                    //тук са валидните команди
                    string name = value[0];
                    string language = value[1];
                    int points = int.Parse(value[2]);
                    if (answer.ContainsKey(language)==false)
                    {
                        //ако не съдържа езика
                        answer.Add(language, new Dictionary<string, int>());
                        answer[language].Add(name, points);
                        countOfLanguages.Add(language, 1);
                        
                    }
                    else if (answer.ContainsKey(language))
                    {
                        //ако съдържа езика
                        countOfLanguages[language]++;
                        if (answer[language].ContainsKey(name)==false)
                        {
                            answer[language].Add(name, points);

                        }
                        else if ((answer[language].ContainsKey(name)))
                        {
                            //ако съдържа ученика   проверяваме дали новите точки са повече
                            int toCheck = answer[language][name];

                            if (points>toCheck)
                            {
                                //ако новата стойност е по-висока
                                answer[language][name] = points;
                            }
                        }
                    }

                }
                else
                {
                    //тук са ban-овете
                    string toBann = value[0];
                    foreach (var item in answer.Keys)
                    {
                        if (answer[item].ContainsKey(toBann))
                        {
                            answer[item].Remove(toBann);
                        }
                    }
                    
                }
                


            }
            Console.WriteLine("Results:");

            Dictionary<string, int> namesSorted = new Dictionary<string, int>();
            foreach (var item in answer.Keys)
            {
                //Console.WriteLine(item);
                foreach (var token in answer[item].OrderByDescending(x=> x.Value))
                {
                    string key = token.Key;
                    int value = token.Value;
                    namesSorted.Add(key, value);
                    //Console.WriteLine($"{token.Key} | {token.Value}");
                    //Console.WriteLine($"{token.Key} | {token.Value}");
                }
                //Console.WriteLine(item);
            }
            Dictionary<string, int> finalTest = namesSorted.OrderByDescending(x=> x.Value).ThenBy(x=> x.Key).ToDictionary(pair => pair.Key, pair => pair.Value);
            foreach (var item in finalTest)
            {
                Console.WriteLine($"{item.Key} | {item.Value}");
            }
            Console.WriteLine("Submissions:");
            foreach (var item in countOfLanguages.OrderByDescending(x=> x.Value).ThenBy(x=> x.Key))
            {
                Console.WriteLine($"{item.Key} - {item.Value}");
            }

        }
    }
}

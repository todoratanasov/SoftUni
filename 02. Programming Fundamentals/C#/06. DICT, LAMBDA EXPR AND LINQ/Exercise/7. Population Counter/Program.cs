using System;
using System.Collections.Generic;
using System.Linq;

namespace _7._Population_Counter
{
    class Program
    {
        //So many people! It’s hard to count them all. But that’s your job as a statistician. You get raw data for a given city and you need to 
        //aggregate it. 
        //On each input line, you’ll be given data in format: "city|country|population". There will be no redundant whitespaces anywhere in the
        //input.Aggregate the data by country and by city and print it on the console.
        //For each country, print its total population and on separate lines, the data for each of its cities. Countries should be ordered by their
        //total population in descending order and within each country, the cities should be ordered by the same criterion.
        //If two countries/cities have the same population, keep them in the order in which they were entered. Check out the examples; follow the
        //output format strictly!
        //Input
        //•	The input data should be read from the console.
        //•	It consists of a variable number of lines and ends when the command "report" is received.
        //•	The input data will always be valid and in the format described.There is no need to check it explicitly.
        //Output
        //•	The output should be printed on the console.
        //•	Print the aggregated data for each country and city in the format shown below.

        static void Main(string[] args)
        {
            SortedDictionery<string, SortedDictionery<string, long>> answer = new SortedDictionery<string, SortedDictionery<string, long>>();

            while (true)
            {
                List<string> value = Console.ReadLine().Split("|", StringSplitOptions.RemoveEmptyEntries).ToList();

                if (value[0]=="report")
                {
                    break;
                }

                string country = value[1];
                string city = value[0];
                long population = long.Parse(value[2]);

                if (answer.ContainsKey(country)==false)
                {
                    //ако първият dict не съъдържа country добавяме и country и city и population
                    answer.Add(country, new SortedDictionery<string, long>());
                    answer[country].Add(city, population);
                }
                else
                {
                    if (answer[country].ContainsKey(city)==false)
                    {
                        answer[country].Add(city, population);
                    }
                    else
                    {
                        answer[country][city] += population;
                    }
                }
            }
            SortedDictionery<string, long> countryPopulation = new SortedDictionery<string, long>();

            SortedDictionery<string, SortedDictionery<string, long>> sorted = new SortedDictionery<string, SortedDictionery<string, long>>();
            SortedDictionery<string, long> citySorted = new SortedDictionery<string, long>();
            foreach (var item in answer)
            {
                
                string theCountry = item.Key;
                countryPopulation.Add(theCountry, 0);                
                foreach (var token in item.Value)
                {
                    string cityToAdd = token.Key;
                    
                    long totalPopulation = token.Value;
                    countryPopulation[theCountry] += totalPopulation;
                    citySorted[cityToAdd] = totalPopulation;
                }
               
            }
            SortedDictionary<string, long> result = countryPopulation.OrderByDescending(x => x.Value).ToSortedDictionery(pair => pair.Key, pair => pair.Value);

            foreach (var item in result)
            {
                string res1 = item.Key;
                long rest2 = item.Value;
                Console.WriteLine($"{res1} (total population: {rest2})");
                foreach (var token in answer)
                {   
                    
                    foreach (var t in token.Value.OrderByDescending(x=> x.Value))
                    {
                        
                        if (token.Key == res1)
                        {
                            Console.WriteLine($"=>{t.Key}: {t.Value}");
                        }
                    }                  
                    
                }
            }       
        }
    }
}

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Lists_description
{
    class Program
    {
        static void Main(string[] args)
        {
            List<double> numbers = new List<double>() { 1, 2, 3, 4 }; // създаване на листове

            List<string> numsString = Console.ReadLine().       // по този начин се чете стринг от конзолата
                Split(" ", StringSplitOptions.RemoveEmptyEntries).
                ToList();

            List<double> numsdouble = Console.ReadLine().             // по този начин директно в Select се пуска метода double.Parse за всяка стойност и се
                Split(" ", StringSplitOptions.RemoveEmptyEntries). //налива в листа като doubleeger
                Select(double.Parse).ToList();

            numbers.Add(1);                                     //добавяне на стойности като се добавят накрая
            numbers.Insert(0, -100);                            //избира се на кое конкретно място точно каква стойност да се добави. Останалите се 
                                                                //шифтват надясно

            numbers.Remove(2);                                  //премахва стойността в скобите от първото място, на което я срещне

            numbers.RemoveAt(0);                                //по този начин се маха съдържанието на съответния индекс в скобите. Всички се шифтват,
                                                                // за да запълнят мястото след това

            foreach (double name in numbers)                       //декларира се променлива за foreach-а, посочва се къде и долу когато се ползва
            Console.Write(name);                                //я извъртява със стойност всяка стойност от мястото, което е след in


            Console.WriteLine(string.Join(" ", numbers));       //по този начин се изпринтва на един ред разделено със съответния чар всяка една 
                                                                //стойност от посоченото след запетайката място

            bool ifContains=numbers.Contains(1);                // boolean дали съдържа съответната стойност

            double count=numbers.Count;                            //връща броя на индексите (като length)

            double cpacity = numbers.Capacity;                     //връща колко капацитет е запазило, за 'кофички' за съответния лист. Дефолтно са 4 като 
                                                                //ги увеличава щом прелее със степен на двойката (4, 8, 16, 32)

            numbers.TrimExcess();                               //изтрива излишното capacity

            Stopwatch timer = new Stopwatch();                  //по този начин си извикваме таймер
            timer.Start();                                      //пускаме таймера
            Console.WriteLine(timer.Elapsed);                   //извеждаме моментно време (все едно обиколка)

            numbers.Sort();                                     //по този начин се сортира листа възходящо
            numbers.Reverse();                                  //по този начин се обръща листа отзад напред и пр.

            numsdouble.Distinct();                              //по този начин ще ми премахне всичките дублирания
            
        }
    }
}

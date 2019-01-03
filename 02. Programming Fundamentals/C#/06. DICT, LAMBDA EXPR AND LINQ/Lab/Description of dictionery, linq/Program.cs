using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Description_of_dictionery__linq
{
    class Program
    {
        static void Main(string[] args)
        {
            KeyValuePair<string, int[]> pesho = new KeyValuePair<string, int[]>("Pesho", new int[] { 6, 5, 4 });
                                                                                                 //по този начин запазваме две стойности в една 
                                                                                                // променлива и
                                                                                                // когато принтираме pesho резултата ще е [Pesho, 19].
            Console.WriteLine(string.Join(", ", pesho.Value));                                                           // Key-"Pesho", а Value-19.

            Dictionary<string, string> phoneBook = new Dictionary<string, string>();            //по този начин се инциализира нов dictionery като в <>
                                                                                                //се посочва съответно key и value

            Dictionary<string, int> cards = new Dictionary<string, int>() { { "2", 11 },{"3", 5 } };      // така се HARDCODE-ва
            phoneBook["pesho"] = "0888860288";                                                  //така се вкарва в key pesho value 0888860288
            phoneBook["gosho"] = "0888860288";                                                  //така се вкарва в key gosho value 0888860288

            phoneBook.TryGetValue("pesho", out string value).ToString();          //по този начин взехме value на съответния key
            Console.WriteLine(value);


            //ДОСТЪПВАНЕ ДО НЕСТНАТИ DICT

            answer[contentUser][contentIP]++;        //първото е външният dict и неговия KEY, второто е KEY на нестнатия и в случая му увеличавам int

            //КОГАТО ОТ КОНЗОЛАТА ЩЕ НИ ИДВА ДАТАТА { } { } { }...

            for (int i = 0; i < length; i++)
            {
                string input=Console.ReadLine();
                string[] data = input.Split();                                      //или краткия вариант

                                                                                      //разбиваме ги по индекси защото в масива от стрингове всъщност
                                                                                      //на всеки индекс стои стринг

                string type = data[0];
                string name = data[1];
                //и пр.
            }

            SortedDictionary<string, string> secondDictionery = new SortedDictionary<string, string>(); //това е сортирано dictionery по ключа

            
            Console.WriteLine(string.Join(", ", phoneBook));                                    //разпечатване на конзола един начин

            foreach (var contact in phoneBook)
            {
                Console.WriteLine($"{contact.Key} : {contact.Value}");                          //ПО ТОЗИ НАЧИН СЕ ПРИНТИРА НА КОНЗОЛАТА!!
            }

            phoneBook.Add("mimi", "0888888888");                                                //по този начин се добавя в dictionery

            if (phoneBook.ContainsKey("mitko")==false)                                          //по този начин се прави проверка за наличие на key
            {                                                                                   //защото не може да имаме дублиращи ключове
                phoneBook.Add("mitko", "");                                                     // след като се добави key, ако нямаме в момента value
            }                                                                                   //просто добавяме в случая празен стринг (празна стойн.)

            phoneBook.Remove("mitko");                                                          //по този начин се премахва запис (key и value)
            bool removed = phoneBook.Remove("pesho");                                           //remove е boolean

            phoneBook.Clear();                                                                  //по този начин се изчиства целият dictionery

            int dictCount = phoneBook.Count;                                                    //по този начин се проверява колко реално елемента има
                                                                                                //в dictionery

            foreach (var key in phoneBook.Keys)                                                 //по този начин се изпринтират само ключовете
            {
                Console.WriteLine(key);
            }
            foreach (var valuess in phoneBook.Values)                                            //по този начин се изпринтират values на dictionery
            {
                Console.WriteLine(valuess);
            }

            bool isContainsKey = phoneBook.ContainsKey("Pesho");                                 //проверява се дали съдържа този key

            bool isContainsValue = phoneBook.ContainsValue("123");                               //проверява дали има съответното value

            phoneBook.TryGetValue("Pesho", out string values);                                    //по този начин същото като try parse май. Пробваме да
                                                                                                 //ни намери съответната стойнсот, ако има key-a и да 
                                                                                                 //я присвои на 
                                                                                                 //новата променлива (в случая string value)


            //ИНТЕРЕСНА ЗАДАЧА С НЕСТНАТИ DICTIONERY!!!

            //получаваме от конзолата
            //country - town
            //town    : street
            //street  # 12
            // END - това е команда, след която трябва да спре програмата

            Dictionary<string, Dictionary<string, Dictionary<string, int>>> map = new 
                Dictionary<string, Dictionary<string, Dictionary<string, int>>>();              //цялото това е nested dictionery с 2 dictionery в него

            string command = Console.ReadLine();

            while (command!="END")
            {
                if (command.Contains(" - "))
                {
                    var tokens = command.Split(" - ");      //така сплитваме двойката стойности по тире и се получава tokens масив от стрингове
                    string country = tokens[0];             // взимаме си стойностите
                    string town = tokens[1];

                    if (map.ContainsKey(country)==false)
                    {
                        map.Add(country, new Dictionary<string, Dictionary<string, int>>());
                    }
                    if (map[country].ContainsKey(town)==false)
                    {
                        map[country].Add(town, new Dictionary<string, int>());          //като цяло задачата е сбъркана каза, но тук виждам за какво
                                                                                        // иде реч за нестнатите dictionery как се работи с тях
                    }
                }
            }

            //LINQ

             int number =  new List<int>(){1, 2, -1}.Min();                                            //връща най-ниската стойност в листа
             int number1 =  new List<int>(){1, 2, -1}.Max();                                            //връща най-високата стойност в листа
             int number2 =  new List<int>(){1, 2, -1}.Sum();                                            //връща сумата на всички числа
             double number3 =  new List<int>(){1, 2, -1}.Average();                                        //връща средната стойност на всички числа

            //double[] numbers = new List<int>() { 1, 2, 3 }.Select(double.Parse).ToArray();             //селекта прави метода в скоби за всички в 
                                                                                                       //колекцията

            List<int> nums = new List<int>{ 10, 2, 30, 14, 5 };

            var orderedAsc = nums.OrderBy(x => x).ToList();                                                     //по този начин ще сравнява всеки един елемент по
                                                                                                                // стойността си като int  в случая и ще ги 
                                                                                                                //сортира възходящо

            string[] line = File.ReadAllLines("input.txt");

            var oddLines = line.Where((linia, index) => index % 2 == 0).ToArray();      //по този начин използваме linq с два аргумента и му казваме да 
                                                                                        //вземе само нечетните редове

            var orderedDes = nums.OrderByDescending(x => x).ToArray();                                           //ще ги сортира низходящо

            Dictionary<string, double> products = new Dictionary<string, double>();

            products.Add("krastavitsi", 3.05);
            products.Add("Domati", 4.00);
            products.Add("Ananas", 3.05);

            var sorted = products.OrderBy(x => x.Value).ThenBy(x => x.Key);                         //по този начин първо сортираме по стойност, после 
                                                                                                    //по ключ и накрая продукта е сортирано по реда на
                                                                                                    //сортиране!

            var sorted1 = products.OrderBy(x => x.Value).ThenBy(x => x.Key)                         //по този начин с ToDict... му казваме да върне всичко
                .ToDictionary(pair => pair.Key, pair => pair.Value);                                //в dictionery

            //ЗА СОРТИРАНЕТО!!! МОЖЕ ДА СЕ СОРТИРА И В 'КОЛЕКЦИЯТА' ПРИ foreach!!!!!!

            int[] intArray = new int[] { 100, 200, 300, 250 };

            Console.WriteLine(string.Join(" ", intArray.Skip(2)));                                  //по този начин със Skip му казвам, че не искам 
                                                                                                    //това в скобите (в случая първите две 100 и 200

            Console.WriteLine(string.Join(" ", intArray.Take(2)));                                  //по този начин с Take(2) ще вземе само второто
                                                                                                    //или в случая (200)

            int[] newNumbers = new int[] { 3, 4, 5, 9, 12 };

            var oddNumbers = nums.Where(x => x % 2 == 0);                                           // where доста ще се ползва и в случая oddNumbers
                                                                                                    //ще приеме само четните числа

            var countNumbers = newNumbers.Count(x => x % 2 == 0);                                   //в този случай с Count ще преброи колко като 
                                                                                                    //бройка са четните

            int[] numbers5 = new int[] { 1, 2, 2, 3 };
            numbers5 = numbers5.Distinct().ToArray();                                               //по този начин с distinct ще премахне дублиращите 
                                                                                                    //се стойности и ще отпечата само една от тях

            var returned = numbers5.First(x=> x % 2==0);                                            //ще върне първата стойност отг. на условието
                                                                                                    //в скобите в случая първата четна
            var returned1 = numbers5.Last(x => x % 2 == 0);                                         //ще върне последната стойност отговаряща на 
                                                                                                    //условието в скобите в случая четна
            var returned2 = numbers5.Single(x=> x==4);                                              //ще върне само, ако елемента отговарящ на условието
                                                                                                    // в скобите е само 1бр.

            var concatenirani = numbers5.Concat(newNumbers);                                        //с concat ще събере две колекции в една залепяйки 
                                                                                                    // се една след друга

            List<double> value = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries) //по този начин с Take(3) си избираме само колко
                .Select(double.Parse).OrderByDescending(x => x).Take(3).ToList();                     //елемента да си вземем винаги отляво на дясно)

            Dictionary<string, int> preobrazuvano = niakakyvArray.ToDictionary((x) => x, x => 0); //по този начин ни взима всяко нещо от array-а 
                                                                                                    //слага го като Key, а срещу него слага value = 0






        }
    }
}

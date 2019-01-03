namespace _02._Ad_msg
{
    using System;

    class Advertisement_Message
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            string[] phr = { "Excellent product.", "Such a great product.", "I always use that product.", "Best product of its category.", "Exceptional product.", "I can’t live without this product." };
            string[] events = { "Now I feel good.", "I have succeeded with this product.", "Makes miracles.I am happy of the results!", "I cannot believe but now I feel awesome.", "Try it yourself, I am very satisfied.", "I feel great!" };
            string[] authors = { "Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva" };
            string[] city = { "Burgas", "Sofia", "Plovdiv", "Varna", "Ruse" };

            var random = new Random();

            for (int i = 0; i < n; i++)
            {
                Console.WriteLine($"{phr[random.Next(0, phr.Length - 1)]} {events[random.Next(0, events.Length - 1)]} {authors[random.Next(0, authors.Length - 1)]} {city[random.Next(0, city.Length - 1)]}");
            }
        }
    }
}

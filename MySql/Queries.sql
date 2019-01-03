
#00. Table Design

CREATE TABLE planets(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL    
);
CREATE TABLE spaceports(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    planet_id INT(11)
);
CREATE TABLE spaceships(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    manufacturer VARCHAR(30) NOT NULL,
    light_speed_rate INT(11) DEFAULT 0
);
CREATE TABLE colonists(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    ucn CHAR(10) UNIQUE NOT NULL,
    birth_date DATE NOT NULL
);
CREATE TABLE journeys(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    journey_start DATETIME NOT NULL,
    journey_end DATETIME NOT NULL,
    purpose ENUM('Medical', 'Technical', 'Educational', 'Military'),
    destination_spaceport_id INT(11),
    spaceship_id INT(11)
);
CREATE TABLE travel_cards(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    card_number CHAR(10) UNIQUE NOT NULL,
    job_during_journey ENUM('Pilot', 'Engineer', 'Trooper', 'Cleaner','Cook'),
	colonist_id INT(11),
    journey_id INT(11)
);
ALTER TABLE spaceports
ADD CONSTRAINT fk_spaceports_planets
FOREIGN KEY(planet_id)
REFERENCES planets(id);

ALTER TABLE journeys
ADD CONSTRAINT fk_journeys_spaceports
FOREIGN KEY(destination_spaceport_id)
REFERENCES spaceports(id);

ALTER TABLE journeys
ADD CONSTRAINT fk_journeys_spaceships
FOREIGN KEY(spaceship_id)
REFERENCES spaceships(id);

ALTER TABLE travel_cards
ADD CONSTRAINT fk_travel_cards_colonists
FOREIGN KEY(colonist_id)
REFERENCES colonists(id);

ALTER TABLE travel_cards
ADD CONSTRAINT fk_travel_cards_journeys
FOREIGN KEY(journey_id)
REFERENCES journeys(id);

#02. Update


UPDATE journeys
SET purpose='Medical'
WHERE id%2=0;
UPDATE journeys
SET purpose='Technical'
WHERE id%3=0 and id%2!=0;
UPDATE journeys
SET purpose='Educational'
WHERE id%5=0 AND id%3!=0 AND id%2!=0;
UPDATE journeys
SET purpose='Military'
WHERE id%7=0 AND id%5!=0 AND id%3!=0 AND id%2!=0;

#04. Extract all travel cards

SELECT card_number,
	job_during_journey
    FROM travel_cards
    ORDER BY card_number ASC;

#05. Extract all colonists

SELECT id,
	concat(`first_name`,' ',`last_name`) AS full_name,
    ucn
    FROM colonists
    ORDER BY full_name, id;
    
#06. Extract all military journeys

SELECT id,
	journey_start,
    journey_end
    FROM journeys
    WHERE purpose='Military'
    ORDER BY journey_start;

#07. Extract all pilots

SELECT c.id,
	concat(c.`first_name`,' ',c.`last_name`) AS 'full_name'
    FROM colonists c 
    JOIN travel_cards t
    ON c.id=t.colonist_id
    WHERE t.job_during_journey LIKE 'Pilot'
    ORDER BY id;



#08. Count all colonists

SELECT count(j.id) AS 'count'
FROM journeys j
JOIN travel_cards t
ON j.id=journey_id
WHERE j.purpose ='Technical';

#09.Extract the fastest spaceship

SELECT s.name,	
    sp.name
    FROM spaceships s
    JOIN journeys j
    on s.id=spaceship_id
    JOIN spaceports sp
    ON j.destination_spaceport_id=sp.id
    ORDER BY s.light_speed_rate DESC
    LIMIT 1;

#10. Extract - pilots younger than 30 years

SELECT s.name,
	s.manufacturer
FROM spaceships s 
JOIN journeys j 
ON s.id=j.spaceship_id
JOIN travel_cards t 
ON j.id=t.journey_id
JOIN colonists c 
ON t.colonist_id=c.id
WHERE t.job_during_journey='Pilot' AND timestampdiff(YEAR,c.birth_date,'2019-01-01')<30
ORDER BY s.name;

#11. Extract all educational mission

SELECT p.name,
	s.name
FROM journeys j
JOIN spaceports s
ON j.destination_spaceport_id=s.id
JOIN planets p
ON p.id=s.planet_id
WHERE j.purpose='Educational'
ORDER BY s.name DESC;

#12. Extract all planets and their journey count

SELECT p.name,
	COUNT(p.name) AS planet_name
	
FROM planets p
JOIN spaceports s 
ON p.id=s.planet_id
JOIN journeys j 
ON s.id=j.destination_spaceport_id
GROUP BY p.name
ORDER BY planet_name DESC, p.name;

#13. Extract the shortest journey

SELECT j.id,
	p.name,
    s.name,
	j.purpose	
#min(journey_start-journey_end) AS journey_time
FROM journeys j
JOIN spaceports s 
ON j.destination_spaceport_id=s.id
JOIN planets p 
ON s.planet_id=p.id
GROUP BY j.id
ORDER BY min(journey_start-journey_end) DESC
LIMIT 1;

#14. Extract the less popular job

SELECT 
	t.job_during_journey

FROM journeys j
JOIN travel_cards t 
on j.id=t.journey_id
GROUP BY j.id
ORDER BY min(journey_start-journey_end) ASC
LIMIT 1;



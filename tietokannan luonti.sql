USE urheilijakanta;

CREATE TABLE urheilijat (
id int(11) NOT NULL AUTO_INCREMENT,
nimi varchar(50),
kutsumanimi varchar(50),
syntymaaika date,
paino INT(4),
linkki VARCHAR(1200),
laji VARCHAR(50),
saavutukset VARCHAR(500),
PRIMARY KEY (id)
) 
ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO urheilijat (id, nimi, kutsumanimi, syntymaaika,
paino, linkki, laji, saavutukset) VALUES
(1, 'Iivo Niskanen', 'Iivo', '1992-01-12', 80, 
'https://urheilutoimittajat.fi/wp-content/uploads/2023/04/Iivo-Niskanen-Peking-2-Suomen-Olympiakomitea-Jesse-Va%CC%88a%CC%88na%CC%88nen-1080x675.jpg', 
'hiihto', 'olympiavoittaja ja maailmanmestari'),
(2, 'Kaisa Mäkäräinen', 'Kaisa', '1983-01-11', 58, 'https://commons.wikimedia.org/wiki/File:Kaisa_M%C3%A4k%C3%A4r%C3%A4inen_(FIN)_with_Crystal_Globe_IBU_2018_(cropped).jpg',
 'ampumahiihto', 'maailmancup-voittaja ja maailmanmestari');

CREATE OR REPLACE USER 'sampleuser'@'localhost' IDENTIFIED BY 'salasana';
GRANT SELECT,INSERT,UPDATE,DELETE ON urheilijat TO 'sampleuser'@'localhost';
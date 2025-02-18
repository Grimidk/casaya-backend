-- INSERT DATA TO ADDRESS
insert into "Property" (name,bathrooms, bedrooms, "parkingSpots", floors, "userUserId", "addressAddressId") values
('A-1',1,2,1,1,1,1),
('B-1',1,2,1,1,2,2),
('C-1',1,2,1,1,3,3),
('D-1',1,2,1,1,4,4),
('A-2',2,3,2,1,5,5),
('B-2',2,3,2,1,6,6),
('C-2',2,3,2,1,7,7),
('D-2',2,3,2,1,8,8),
('A-PH',3,5,3,2,9,9),
('B-PH',3,5,3,2,10,10)
returning *
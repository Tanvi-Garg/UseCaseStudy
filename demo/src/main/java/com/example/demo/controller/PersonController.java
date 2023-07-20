package com.example.demo.controller;

import com.example.demo.Entity.Person;
import com.example.demo.repository.PersonRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonController {
    private final PersonRepository repository;

    PersonController(PersonRepository repository) {
        this.repository = repository;
    }


    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/Persons")
    List<Person> all() {
        return repository.findAll();
    }
    // end::get-aggregate-root[]

    @PostMapping("/create/Persons")
    Person newPerson(@RequestBody Person newPerson) {
        return repository.save(newPerson);
    }

    // Single item

    @GetMapping("/Persons/{id}")
    Person one(@PathVariable Long id) {

        return repository.findById(id).orElseThrow();
    }

    @PutMapping("/person/{id}")
    Person replacePerson(@RequestBody Person newPerson, @PathVariable Long id) {

        return repository.findById(id)
                .map(Person -> {
                    Person.setFirstName(newPerson.getFirstName());
                    Person.setLastName(newPerson.getLastName());
                    Person.setAge(newPerson.getAge());
                    return repository.save(Person);
                })
                .orElseGet(() -> {
                    newPerson.setPersonId(id);
                    return repository.save(newPerson);
                });
    }

    @DeleteMapping("/Persons/{id}")
    void deletePerson(@PathVariable Long id) {
        repository.deleteById(id);
    }

}

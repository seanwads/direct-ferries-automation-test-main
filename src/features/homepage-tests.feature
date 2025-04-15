Feature: Direct Ferries homepage

    Scenario Outline: Popular operators appear
        Given I am on the "<localisation>" homepage
        Then I see popular operators

        Examples:
            | localisation |
            | UK          |
            | Italian     |
            | German      |

    Scenario Outline: Top destinations appear
        Given I am on the "<localisation>" homepage
        Then I see top destinations

        Examples:
            | localisation |
            | UK          |
            | Italian     |
            | German      |

    Scenario Outline: Latest offers appear
        Given I am on the "<localisation>" homepage
        Then I see latest offers

        Examples:
            | localisation |
            | UK          |
            | Italian     |
            | German      |